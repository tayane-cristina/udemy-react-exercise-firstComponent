import gado from '../assets/gado.jpg'

const FirstComponent = () => {
    return (
        // Como colocar imagem em react
        <div>
            <div>
            <h3>Imagem em public</h3>
                <img src='/escadaria.jpg' alt='escadaria' />
            </div>

            <div>
                <h3>Imagem em src</h3>
                <img src={gado} alt='gado'/>
            </div>
        </div>
    );
};

export default FirstComponent;