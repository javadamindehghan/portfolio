


export default function Item({children ,href,title}) {
    return (
      <>
      <a href={href}>
      <div className="item-img" >
        <div className='after'></div>
        <p>{title}</p>

         {children}
      </div>
      </a>
      </>


    )
}
