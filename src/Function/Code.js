const addNewCode = () => {
    try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-service",
          {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
           
      } catch (err) {
        setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
      }
}