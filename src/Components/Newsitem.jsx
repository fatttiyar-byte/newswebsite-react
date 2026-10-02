import React from 'react'

const Newsitem = ({
  title,
  src,
  description,
  url,
  searchQuery, }) => {
  const highlightText = (text) => {
    if (!searchQuery || !text) return text;

    const regex = new RegExp(`(${searchQuery})`, "gi");

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark
          key={index}
          style={{
            backgroundColor: "#ffeb3b",
            padding: "0 2px",
            borderRadius: "3px",
          }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };
  return (
    <div className="card d-inline-block m-2 g-lg-1" style={{ width: "20rem" }}>
<img src={src || "/image/NF.png"} className="card-img-top" alt={title}
  onError={(e) => { e.target.src = "/image/NF.png";
  }}
/>      <div className="card-body">
        <h5 >{highlightText(title ? title.slice(0,90):'عنوان ندارد')}</h5>
        <p>{description ? description.slice(0,100):  'توضیح ندارد'}</p>
        <a href={url} className="btn btn-primary" style={{direction:"rtl"}}>بیشتر...</a>
      </div>
    </div>
  )
}

export default Newsitem