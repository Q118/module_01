import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '.';

/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
// const Tracks = () => {
//     const { loading, error, data } = useQuery(TRACKS);
//     return (
//         // <Layout grid>
//         <div style={{display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         alignSelf: 'center',
//         flexGrow: 1,
//         maxWidth: `1000px`,
//         width: '100%',
//         padding: 0,
//         paddingBottom: 5 }}>
//             <QueryResult error={error} loading={loading} data={data}>
//                 {data?.tracksForHome?.map((track, index) => (
//                     <TrackCard key={track.id} track={track} />
//                 ))}
//             </QueryResult>
//         </div>
//         //    </Layout>
//     );
// };

//this rendersthe data in pure json
const Tracks = () => {
    console.log("!" + typeof Layout)
    console.log("!!" + typeof QueryResult)
    const { loading, error, data } = useQuery(TRACKS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            {/* <QueryResult error={error} loading={loading} data={data}>
                {data?.tracksForHome?.map((track, index) => (
                    <TrackCard key={track.id} track={track} />
                ))}
            </QueryResult> */}
                {(JSON.stringify(data))};

        </div>
    );
};


export default Tracks;
