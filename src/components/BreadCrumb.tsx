

const BreadCrumb = () => {
  return (
    <div>
      <div className="h-12 flex items-center bg-white px-4 sm:px-14 md:px-16 lg:px-24 xl:px-48">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
