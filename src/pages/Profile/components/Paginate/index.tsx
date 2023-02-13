import { Container } from './styles';

interface IRepos {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  perviousPage: () => void;
  nextPage: () => void;
}

export function Paginate({ currentPage, totalItems, pageSize, onPageChange }: IRepos) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <PaginateItem
        isSelected={currentPage === 1}
        onClick={() => onPageChange(1)}
      >

      </PaginateItem>
      {pageNumbers.map((number) => (

    </Container>
  );
}
