import { useQuery } from '@apollo/client';
import { EXAMPLE_QUERY } from './Queries'
import CharacterCard from '../components/CharacterCard';

function ExampleQuery() {
    const { loading, error, data } = useQuery(EXAMPLE_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    console.log(data.characters);

    return <div class="container">
        <div class="row">
            {data.characters.map((c) => (
                <div class="col-sm-12 col-md-6 d-flex justify-content-around">
                    <CharacterCard key={c.id} {...c} />
                </div>
            ))}
        </div>
    </div>
}

export default ExampleQuery;

// client
//   .query({
//     query: EXAMPLE_QUERY
//   })
//   .then(result => console.log(result));