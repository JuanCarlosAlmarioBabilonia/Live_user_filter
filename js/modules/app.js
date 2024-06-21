export const getGeneralInfoPeople = async () => {
    const url = ("https://6674179975872d0e0a950e53.mockapi.io/user");
    const options = { 
        method: "GET" 
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}