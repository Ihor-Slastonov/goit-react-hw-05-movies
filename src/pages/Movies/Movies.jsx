import { useSearchParams } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox/SearchBox';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  console.log(searchQuery);


  return (
    <main>
      <SearchBox/>
    </main>
  );
};
