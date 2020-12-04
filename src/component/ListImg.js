const ListImg = ({ images }) => {
    return (
        <div className="col-12 p-5 row">
            {images.map(image => (
                <Imagen 
                    image={image} key={image.id}
                />                
            ))}            
        </div>
    );    
}

const Imagen = ({ image }) => {
    const { largeImageURL, likes, previewURL, tags, views } = image;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top rounded-0"/>                
                <div className="card-body">
                        <p className="card-text">{likes} Me Gusta</p>
                        <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen</a>
                </div>
            </div>        
        </div>
    )
}
 
export default ListImg;