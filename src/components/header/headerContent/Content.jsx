import React from "react";

export default function Content() {
  
  return (
    <div className="w-2/4 leading-7 absolute top-60 left-8 z-50">
     <h1 className="text-3xl uppercase font-bold">Sand dust</h1>
      <p className="mt-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        maiores officia, incidunt porro neque numquam explicabo corporis! Quos,
        veniam quo unde voluptatum, perspiciatis mollitia soluta accusamus
        labore adipisci laborum ex!
      </p>
     <div className="flex gap-4 mt-8">
     <div className="text-yellow-600">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
      </div>
      <div>4/7</div>
      <div>2hr:22min</div>
     </div>
      <button className="mt-8 bg-sky-400 px-6 py-1 rounded"><i class="bi bi-play-fill"></i>Play Now</button>
     </div>
  );
}
