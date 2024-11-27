const Header = () => {
  const changeTheme = () => {
    // const moon = document.querySelector(".fa-moon");
    // const header = document.querySelector(".header");
    // const input = document.querySelector("#search");
    // const select = document.querySelector("#select");
    // moon.addEventListener("click", () => {
    //   document.body.classList.toggle("light-theme");
    //   header.classList.toggle("light-theme");
    //   input.classList.toggle("light-theme");
    //   select.classList.toggle("light-theme");
    // });
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Where im the world?</h1>
        </div>
        <div>
          <i className="fas fa-moon moon" onClick={() => changeTheme()}>
            Dark Mode
          </i>
        </div>
      </header>
    </>
  );
};

export default Header;
