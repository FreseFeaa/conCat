import {
    List,
    useTable,
    EditButton,
    ShowButton,
    getDefaultSortOrder,
    FilterDropdown,
    useSelect,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";



export const UserinfoList = () => {
    const { tableProps, sorter } = useTable({
        resource: "user_info",
        sorters: {
            initial: [
                {
                    field: "id",
                    order: "asc",
                },
            ],
        },
        meta: {
            select: "*",
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    key="id"
                    dataIndex="id"
                    title="ID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                />
                <Table.Column key="first_name" dataIndex="first_name" title="имя" sorter />
                <Table.Column key="last_name" dataIndex="last_name" title="фамилия" sorter />
                <Table.Column key="position" dataIndex="position" title="Должность" sorter />

                <Table.Column
                    title="Кнопка"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <ShowButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};