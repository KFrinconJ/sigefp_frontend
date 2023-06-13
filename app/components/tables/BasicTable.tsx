import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface BasicTableProps<RowDataType> {
  data: RowDataType[];
  title: string;
  columns: TableColumn<RowDataType>[];
  progressPending?: boolean;
  pagination?: boolean;
}

export default function BasicTable<RowDataType>({
  data,
  title,
  columns,
  progressPending = true,
  pagination = false,
}: BasicTableProps<RowDataType>) {
  return (
    <DataTable<RowDataType>
      title={title}
      data={data}
      columns={columns}
      progressPending={progressPending}
      pagination={pagination}
      noHeader={true}
    />
  );
}
