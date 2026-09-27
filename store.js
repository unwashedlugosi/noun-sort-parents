/* Database access for Noun Sort, shared by the practice app and the parents site.
   Progress lives in one JSON document on jsonblob.com (free, no account):
     { progress: {...}, rounds: [ {at, mode, level, score, total, missed}, ... ] }
   The document's id travels in the link (#<id>) and is remembered in this
   browser, so both sites find the same document. The practice app creates it
   the first time it's opened. */
const freshProgress = (testDate) => ({level:1, passStreak:0, cleared:false, boxes:{}, seen:{}, misses:{}, roundCount:0, testDate: testDate || TEST_DEFAULT});

const Store = (() => {
  const API = "https://jsonblob.com/api/jsonBlob";
  const KEY = "nounSort.blobId";
  const MAX_ROUNDS = 1000;
  const valid = s => /^[A-Za-z0-9-]{8,64}$/.test(s || "");

  function remember(v){ try { localStorage.setItem(KEY, v); } catch (e) {} }
  function initialId(){
    const fromLink = (location.hash || "").replace(/^#/, "");
    if (valid(fromLink)){ remember(fromLink); return fromLink; }
    try { const saved = localStorage.getItem(KEY); if (valid(saved)) return saved; } catch (e) {}
    return "";
  }
  let id = initialId();

  async function request(method, url, body){
    const res = await fetch(url, {
      method, cache: "no-store",
      headers: body ? {"Content-Type":"application/json", "Accept":"application/json"} : {"Accept":"application/json"},
      body: body ? JSON.stringify(body) : undefined
    });
    if (!res.ok) throw new Error(res.status === 404 ? "this progress link wasn't found" : "the database answered " + res.status);
    return res;
  }
  async function getDoc(){
    const doc = await (await request("GET", API + "/" + id)).json();
    return {progress: (doc && doc.progress) || null, rounds: Array.isArray(doc && doc.rounds) ? doc.rounds : []};
  }
  async function putDoc(doc){
    if (doc.rounds.length > MAX_ROUNDS) doc.rounds = doc.rounds.slice(-MAX_ROUNDS);
    await request("PUT", API + "/" + id, doc);
  }

  return {
    get ready(){ return !!id; },
    get id(){ return id; },
    async create(){
      const res = await request("POST", API, {progress: null, rounds: []});
      const loc = res.headers.get("Location") || res.headers.get("X-jsonblob-id") || res.headers.get("X-jsonblob") || "";
      const newId = loc.split("/").pop();
      if (!valid(newId)) throw new Error("the database didn't return an id");
      id = newId; remember(id);
      return id;
    },
    async load(){
      const doc = await getDoc();
      return {progress: Object.assign(freshProgress(), doc.progress || {}), rounds: doc.rounds.slice().sort((a, b) => b.at - a.at)};
    },
    // Read, change, write, so a save from the other site isn't lost.
    async update(fn){
      const doc = await getDoc();
      doc.progress = Object.assign(freshProgress(), doc.progress || {});
      fn(doc);
      await putDoc(doc);
      return doc;
    }
  };
})();
