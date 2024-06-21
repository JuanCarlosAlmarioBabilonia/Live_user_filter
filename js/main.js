import { getGeneralInfoPeople } from "./modules/app.js";
import { perfiles } from "./components/perfil.js";

let input__search = document.querySelector("#input__search");
let main = document.querySelector(".main");

addEventListener("DOMContentLoaded", async () => {
    let data = await getGeneralInfoPeople();
    main.innerHTML = await perfiles(data);
    
    input__search.addEventListener("input", async e => {
        const searchTerm = e.target.value.toLowerCase().trim(); 
        const filteredProfiles = data.filter(person => {
            return person.name_full.toLowerCase().includes(searchTerm); 
        });
            main.innerHTML = await perfiles(filteredProfiles);
    });
})