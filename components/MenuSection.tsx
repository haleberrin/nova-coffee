type MenuItem = {
    name: string;
    description: string;
    price: string;
  };
  
  type MenuSectionProps = {
    id: string;
    number: string;
    kicker: string;
    title: string;
    italicTitle: string;
    items: MenuItem[];
  };
  
  export default function MenuSection({
    id,
    number,
    kicker,
    title,
    italicTitle,
    items,
  }: MenuSectionProps) {
    return (
      <section
        className="menu-products-section"
        id={id}
      >
        <div className="menu-products-heading">
          <div>
            <span>{number}</span>
            <p>{kicker}</p>
          </div>
  
          <h2>
            {title}
            <span>{italicTitle}</span>
          </h2>
        </div>
  
        <div className="menu-products-list">
          {items.map((item, index) => (
            <article
              className="menu-product"
              key={item.name}
            >
              <span className="menu-product-number">
                {String(index + 1).padStart(2, "0")}
              </span>
  
              <div className="menu-product-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
  
              <span className="menu-product-price">
                {item.price}
              </span>
            </article>
          ))}
        </div>
      </section>
    );
  }