import './Stylesheet.css'
const Idolo =(props)=>{
    return(
        <div className='geral'>
            <h1 className='titulo'>
                Idolos Gremistas
            </h1>

            <p className='nome'>nome:{props.nome}</p>
            <img src={`${process.env.PUBLIC_URL}/assets/${props.img}`} className='imagem'/>
            <p className='descricao'>descricao:{props.descricao}</p>
        </div>
    )
}


export default Idolo