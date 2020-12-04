import { useState } from 'react';

const Formulario = ({ setSearch }) => {
    const [ data, setData] = useState('');
    const [ error, setError] = useState(false);

    const handleChange = (e) => {
        setData(e.target.value);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        if(data.trim() === '') {
            setError(true);            
            return;
        }
        setError(false);
        setSearch(data);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Busca una imagen, ejemplo: fútbol o café" 
                        value={data}
                        onChange={handleChange}
                    />                            
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-lg btn-block" 
                        value="Buscar" 
                        />                            
                </div>
                {error && <MessageError message="Debes ingresar una palabra" />}
            </div>
        </form>
    );
}

const MessageError = ({ message }) => (        
    <div className="alert alert-danger alert-dismissible fade show form-group col-md-8" role="alert">
        {message}        
    </div>
)    
export default Formulario;