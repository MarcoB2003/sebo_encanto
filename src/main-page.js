import './main-page.css'

export default function MainPage(){
    return(
        <>
        <img src="foto sessão 1.png" alt="banner" className="banner1"/>
            <div className='texto-banner'>
                <div className='sebo'>
            <h1>Sebo Encanto de Livros</h1>
                </div>
            <h1>Visite nossas lojas físicas e garanta</h1>
            <h1>já seus novos livros.</h1>
            <h1>Avenida Paulista 01310-930</h1>
        </div>
        <div className='nossa-loja'>
            <h1>Visite nossa loja</h1>
            <img src="23_10_capa_blog 1.png" alt="capa" className='local-banner' />
            <p>Estamos localizados no coração da Avenida Paulista, em um dos centros culturais mais vibrantes de São Paulo. Aberta de segunda a sexta, das 10h às 18h, proporcionamos aos nossos clientes um ambiente acolhedor e inspirador, ideal para amantes de livros que buscam uma <br/>  experiência de leitura única.</p>
        </div>
        <div className='lista-gibis'>
        <h1>Confira nossa lista de Gibis</h1>
        <div className='gibis'>
            <div className='gibi'>
                <h1>O MELHOR DE BATMAN</h1>
                <img src="batman.png" alt="batman" />
                <h1>29.99R$</h1>
            </div>
            <div className='gibi'>
                <h1>HOMEM ARANHA ENCURRALADO</h1>
                <img src="aranha.png" alt="aranha" />
                <h1>34.99R$</h1>
            </div>
            <div className='gibi'>
                <h1>HOMEM DE FERRO 2020</h1>
                <img src="homem-de-ferro-2020-o-homem-do-ano-1 1.png" alt="ferro" />
                <h1>32.99R$</h1>
            </div>
        </div>
        <div className='lista-comprados'>
        <h1>Livros mais Comprados do Momento</h1>
        <div className='comprados'>
            <div className='comprado'>
                <h1>FRANKENSTEIN</h1>
                <img src="frank.png" alt="batman" />
                <h1>29.99R$</h1>
            </div>
            <div className='comprado'>
                <h1>DUNA</h1>
                <img src="duna.png" alt="aranha" />
                <h1>34.99R$</h1>
            </div>
            <div className='comprado'>
                <h1>PERCY JACKSON</h1>
                <img src="percy.png" alt="ferro" />
                <h1>32.99R$</h1>
            </div>
        </div>
        </div>
        <div className='lista-lancamentos'>
        <h1 className='ultimos'>Os Ultimos lançamentos</h1>
        <div className='lancamentos'>
            <div className='lancamento'>
                <h1>A VINGANÇA</h1>
                <img src="divinos.png" alt="batman" />
                <h1>29.99R$</h1>
            </div>
            <div className='lancamento'>
                <h1> CULPA</h1>
                <img src="culpa.png" alt="aranha" />
                <h1>34.99R$</h1>
            </div>
            <div className='lancamento'>
                <h1>DIVINOS RIVAIS</h1>
                <img src="deuses.png" alt="ferro" />
                <h1>32.99R$</h1>
            </div>
        </div>
        </div>
        <div className='editoras'>
        <h1>As Melhores Editoras</h1>
        <div className='editoras-lista'>
        <img src="EDITORA 1.png" alt="editora1" />
        <img src="EDITORA 2.png" alt="editora1" />
        <img src="EDITORA 3.png" alt="editora1" />
        <img src="EDITORA 4.png" alt="editora1" />
        </div>
        <div className='editoras-lista'>
        <img src="EDITORA 5.png" alt="editora1" />
        <img src="EDITORA 6.png" alt="editora1" />
        <img src="EDITORA 7.png" alt="editora1" />
        <img src="EDITORA 8.png" alt="editora1" />
        </div>
        <h1 className='confira'>Confira as editoras!</h1>
        </div>
        </div>
        <footer>
            <div>
        <img src="logo.svg" alt="logo" className='logo'/>
        <h1> © 2024 BookStore. Todos os direitos reservados.</h1>
            </div>
        </footer>
        </>
    )
}