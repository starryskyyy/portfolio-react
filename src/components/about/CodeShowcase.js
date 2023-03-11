import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import myPhoto from '../../assets/img/myPhoto.png';

export default function CodeShowcase() {
    const code = `
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState("");

    // Getting pokemons from pokeapi
    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get(
                "https://pokeapi.co/api/
                    v2/pokemon?limit=20&offset=20"
            );
            setNextUrl(res.data.next);
            await Promise.all(
                res.data.results.map(async (pokemon) => {
                    let pokeResponse = await axios.get(
                        \`https://pokeapi.co/api/v2
                            /pokemon/\${pokemon.name}\`
                    );
                    setPokemons((p) => [...p, pokeResponse.data]);
                })
            );
        };
        getPokemon();
    }, []);
`
    const customStyle = {
        'hljs': { backgroundColor: '#2D2D2D !important' }, // add this line to set the background color
        'keyword': { color: '#C98BDF' }, // style for keywords (e.g. if, else, while)
        'function': { color: '#4D5BCE' }, // style for function names
        'parameter': { color: '#43D9AD' }, // style for function parameters
        'variable': { color: '#43D9AD' }, // style for variables
        'comment': { color: '#1E2D3D', fontStyle: 'italic' }, // style for comments
        'punctuation': { color: '#E99287' }, // style for brackets
    };
    return (
        <div className="w-full h-full text-secondary-1">
            <div className="flex items-center pl-6 pb-2">
                <img src={myPhoto} alt="pic of me" />
                <p className="ml-4 text-secondary-3 font-semibold text-sm">@starryskyyy</p>
            </div>
            <p className="pl-16 text-sm">API fetching pokemons</p>
            <div className="w-5/6 m-10 bg-primary-3 h-4/5 border-solid border border-lines rounded-md">
                <div className="text-sm pt-6" >
                    <SyntaxHighlighter language="javascript" style={customStyle}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}
