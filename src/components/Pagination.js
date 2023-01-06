const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    
  const pageNumbers = Array.from( Array(Math.ceil(totalPosts / postsPerPage)),(el, i) => i + 1 )

//   const pageNumbers = Array(Math.ceil(totalPosts / postsPerPage))
//   .fill()
//   .map((el, i) => i + 1);

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
