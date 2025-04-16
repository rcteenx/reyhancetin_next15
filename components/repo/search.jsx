"use client";
import { useState } from "react";

export default function Search({ ext }) {
  const [search, setSearch] = useState();
  const findSerach = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
    window.location.href = "/ara" + ext + "?q=" + txtAra.value;
  };

  return (
    <div>
      <form className=" w-full flex bg-light p-2 rounded-lg">
        {/* <input
          id="txtAra"
          aria-label="Ara"
          type="search"
          placeholder="Ara"
          name="q"
        /> */}
        <input
          id="txtAra"
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          placeholder="Ara"
          aria-label="Ara"
          aria-describedby="button-addon1"
        />
        <button
          onClick={findSerach}
          type="submit"
          className=" p-2 bg-teal-800 ml-2 text-light cursor-pointer font-medium rounded"
        >
          ARA
        </button>
      </form>
    </div>
  );
}
