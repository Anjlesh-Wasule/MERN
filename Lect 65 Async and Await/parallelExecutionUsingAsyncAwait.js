/* ---------- ASYNC HELPERS ---------- */

async function fetchComments(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Comments"), delay);
  });
}

async function fetchUsers(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Users"), delay);
  });
}

async function fetchPosts(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts"), delay);
  });
}

async function request4(delay = 1000) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Error Due to Timeout"), delay);
  });
}

/* ---------- MAIN ---------- */

async function main() {
  /* Promise.resolve / reject */
  Promise.resolve(10).then(console.log);
  Promise.reject("test rejection").catch(console.error);

  /* Sequential async/await */
  const startTime = performance.now();
  try {
    await fetchPosts(1000);
    await fetchComments(1000);
    await fetchUsers(1000);
  } finally {
    console.log("Sequential time:", performance.now() - startTime);
  }

  /* Promise.all */
  const allStart = performance.now();
  try {
    await Promise.all([
      fetchComments(1000),
      fetchUsers(1000),
      fetchPosts(1000),
    ]);
  } finally {
    console.log("Promise.all time:", performance.now() - allStart);
  }

  /* Promise.any */
  try {
    const result = await Promise.any([
      fetchComments(1000),
      fetchUsers(1000),
      fetchPosts(1000),
      request4(1000),
    ]);
    console.log("Promise.any result:", result);
  } catch (err) {
    console.error("Promise.any error:", err);
  }

  /* Promise.any – all rejected */
  try {
    const result = await Promise.any([request4(1000)]);
    console.log(result);
  } catch (err) {
    console.error("All promises failed:", err);
  }

  /* Promise.allSettled */
  console.log("Calling Promise.allSettled");
  const settledResults = await Promise.allSettled([
    fetchComments(1000),
    fetchUsers(1000),
    fetchPosts(1000),
    request4(1000),
  ]);
  console.log(settledResults);

  /* Promise.race */
  try {
    const raceResult = await Promise.race([
      fetchComments(1000),
      fetchUsers(1000),
    ]);
    console.log("Promise.race result:", raceResult);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Promise.race called");
  }
}

main().catch((err) => console.error("Unhandled error in main:", err));
