import { useQuery } from '@apollo/client';
import { FILTER_QUERY } from './Queries'
import CharacterCard from '../components/CharacterCard';

function FilterQuery(props) {
    const { loading, error, data } = useQuery(FILTER_QUERY, {
        variables: {
            name: props.name
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    console.log(data);
    return <div class="container">
        <div class="row">
            {data.charactersByFilter.map((c) => (
                <div class="col-sm-12 col-md-6 d-flex justify-content-around">
                    <CharacterCard key={c.id} {...c} />
                </div>
            ))}
        </div>
    </div>
}

export default FilterQuery;