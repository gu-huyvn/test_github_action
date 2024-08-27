import type { CrudOperators, CrudFilters, CrudSorting } from '@refinedev/core';

export const mapOperator = (operator: CrudOperators): string => {
  switch (operator) {
    case 'ne':
    case 'gte':
    case 'lte':
      return `_${operator}`;
    case 'contains':
      return '_like';
    default:
      return '';
  }
};

export const generateSort = (sorters?: CrudSorting) => {
  if (sorters && sorters.length > 0) {
    const _sort: string[] = [];
    const _order: string[] = [];

    sorters.map((item) => {
      _sort.push(item.field);
      _order.push(item.order);
    });

    return {
      _sort,
      _order,
    };
  }

  return;
};

export const generateFilter = (filters?: CrudFilters) => {
  const queryFilters: { [key: string]: string } = {};

  if (filters) {
    filters.map((filter) => {
      if (filter.operator === 'or' || filter.operator === 'and') {
        throw new Error(
          `Operator: ${filter.operator}\` is not supported. You can create custom data provider`
        );
      }

      if ('field' in filter) {
        const { field, operator, value } = filter;

        if (field === 'q') {
          queryFilters[field] = value;
          return;
        }

        const mappedOperator = mapOperator(operator);
        queryFilters[`${field}${mappedOperator}`] = value;
      }
    });
  }

  return queryFilters;
};
