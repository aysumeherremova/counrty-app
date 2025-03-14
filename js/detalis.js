  // diməli birinci URL-dən ölkə adını almalıyııxx
  const urlParams = new URLSearchParams(window.location.search);
  const countryName = decodeURIComponent(urlParams.get('country'));

  let countryData = null;

  fetch("https://restcountries.com/v3.1/name/" + countryName)
      .then(response => response.json())
      .then(data => {
          countryData = data[0]; 
          displayCountryDetails();
      });

  function displayCountryDetails() {
      if (!countryData) {
          document.getElementById("country-details").innerHTML = "<p>Ölkə tapılmadı.</p>";
          return;
      }
      document.getElementById("country-details").innerHTML = `
          <div class="country-card">
              <img src="${countryData.flags.svg}" alt="${countryData.name.common} Bayrağı" class="country-flag">
              <div class="country-info">
                  <h2>${countryData.name.common}</h2>
                  <p><strong>Paytaxt:</strong> ${countryData.capital}</p>
                  <p><strong>Region:</strong> ${countryData.region}</p>
                  <p><strong>Ərazi:</strong> ${countryData.area} km<sup>2</sup></p>
                  <p><strong>Əhali:</strong> ${countryData.population}</p>
   21               <p><strong>Qonşular:</strong> ${countryData.borders ? countryData.borders.join(", ") : "Yoxdur"}</p>
              </div>
          </div>
      `;
  }

  function goBack() {
      window.history.back(); 
  }