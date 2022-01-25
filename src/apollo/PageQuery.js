import { useQuery } from '@apollo/client';
import { PAGE_QUERY } from './Queries'
import CharacterCard from '../components/CharacterCard';

function PageQuery(props) {
    const { loading, error, data } = useQuery(PAGE_QUERY, {
        variables: {
            number: props.number,
            pages: props.pages
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    console.log(data);
    return <div class="container">
        <div class="row">
            {data.charactersByPage.map((c) => (
                <div class="col-sm-12 col-md-6 d-flex justify-content-around">
                    <CharacterCard key={c.id} {...c} />
                </div>
            ))}
        </div>
    </div>
}

export default PageQuery;