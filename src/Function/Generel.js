export const Notification = async (user, str) => {
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/add-lite",
        {
          method: "PATCH",
          body: JSON.stringify({ str }),
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      console.log(str);
      console.log(resJson);
    } catch (err) {
      console.log(err);
      console.log({str});

    }
  };