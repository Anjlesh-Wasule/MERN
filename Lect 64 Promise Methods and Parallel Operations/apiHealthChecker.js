function healthAPIServer_IN() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Output from api server IN");
    }, 900);
  });
}

function healthAPIServer_US() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Output from api server US");
    }, 2000);
  });
}

function healthAPIServer_EU() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Can't access EU Server");
    }, 1000);
  });
}

function checkServerStats(){
  return Promise.allSettled([ healthAPIServer_IN(), healthAPIServer_US(), healthAPIServer_EU()])
    .then((res) => {
      console.log("====Server Health====")
      console.table(res)
    })
}

function checkFastestServer() {
  return Promise.race([ healthAPIServer_IN(), healthAPIServer_US(), healthAPIServer_EU()])
}

checkServerStats();

checkFastestServer()
  .then(result => {
    console.log("Fastest API:", result);
  })
  .catch(err => {
    console.error(err);
  });
