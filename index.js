const validateEmail = (e) => {
  const parentNode =
    e.target.nodeName === "IMG"
      ? e.target.parentNode.parentNode
      : e.target.parentNode;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById("email");
  if (emailRegex.test(email.value)) {
    if (parentNode.classList.contains("error")) {
      parentNode.classList.remove("error");
    }
  } else {
    parentNode.classList.add("error");
  }
};
