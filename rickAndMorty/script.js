function traerPersonaje() {
  fetch("https://rickandmortyapi.com/api/character/1").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-1");
      name.innerHTML = data.name;

      const status = document.querySelector("#status");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-1");
      img.src = data.image;

      const link = document.querySelector("#link");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-2");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-2");
      enlace1.href = data.origin.url;
    });
  });

  //personaje 2

  fetch("https://rickandmortyapi.com/api/character/2").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-2");
      name.innerHTML = data.name;

      const status = document.querySelector("#status-2");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-2");
      img.src = data.image;

      const link = document.querySelector("#link-t");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link-t");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-tt");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-tt");
      enlace1.href = data.origin.url;
    });
  });

  //personaje 3

  fetch("https://rickandmortyapi.com/api/character/3").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-3");
      name.innerHTML = data.name;

      const status = document.querySelector("#status-3");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-3");
      img.src = data.image;

      const link = document.querySelector("#link-r");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link-r");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-rr");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-rr");
      enlace1.href = data.origin.url;
    });
  });

  //cuarto personaje

  fetch("https://rickandmortyapi.com/api/character/4").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-4");
      name.innerHTML = data.name;

      const status = document.querySelector("#status-4");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-4");
      img.src = data.image;

      const link = document.querySelector("#link-y");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link-y");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-yy");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-yy");
      enlace1.href = data.origin.url;
    });
  });

  //quinto personaje

  fetch("https://rickandmortyapi.com/api/character/12").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-5");
      name.innerHTML = data.name;

      const status = document.querySelector("#status-5");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-5");
      img.src = data.image;

      const link = document.querySelector("#link-a");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link-a");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-aa");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-aa");
      enlace1.href = data.origin.url;
    });
  });

  //sexto personaje

  fetch("https://rickandmortyapi.com/api/character/98").then((data) => {
    data.json().then((data) => {
      console.log(data);
      const name = document.querySelector("#name-6");
      name.innerHTML = data.name;

      const status = document.querySelector("#status-6");
      status.innerHTML = `${data.status} - ${data.species}`;

      const img = document.querySelector("#im-6");
      img.src = data.image;

      const link = document.querySelector("#link-d");
      link.innerHTML = data.location.name;

      const enlace = document.querySelector("#link-d");
      enlace.href = data.location.url;

      const link1 = document.querySelector("#link-dd");
      link1.innerHTML = data.origin.name;

      const enlace1 = document.querySelector("#link-dd");
      enlace1.href = data.origin.url;
    });
  });
}

traerPersonaje();
