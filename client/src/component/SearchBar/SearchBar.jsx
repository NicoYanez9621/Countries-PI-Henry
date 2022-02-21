import style from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={style.contenedor}>
      <form>
        <input
          className={style.inputText}
          type="text"
          placeholder="Search Country..."
        />
        <input className={style.inputSubmit} type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
