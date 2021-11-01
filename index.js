const validateEmail = (e) => {
  let parentNode;
  if (e.target.nodeName === "INPUT") {
    if (e.key === "Enter") {
      parentNode = e.target.parentNode;
    } else {
      return;
    }
  } else {
    parentNode =
      e.target.nodeName === "IMG"
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
  }
  console.log(parentNode);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById("email");
  if (emailRegex.test(email.value)) {
    if (parentNode.classList.contains("error")) {
      parentNode.classList.remove("error");
    }
    parentNode.classList.add("success");
    email.value = "";
    setInterval(removeSuccess, 5000);
  } else {
    parentNode.classList.add("error");
  }
};
const removeSuccess = () => {
  document.getElementsByClassName("hero-action")[0].classList.remove("success");
};
