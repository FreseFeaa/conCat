import { useSimpleList, CreateButton } from "@refinedev/antd"
import { Avatar, Flex } from 'antd';
import { List, Card } from "antd";
import { useGetIdentity } from "@refinedev/core";

export const ProductList = () => {
    const { Meta } = Card;
    const { listProps } = useSimpleList();
    const { data: account } = useGetIdentity();



    const hasEnoughPoints = (price) => {
        return price <= account?.userinfo?.points
    }

    return <List>
        <Flex wrap="wrap" gap='middle' justify='center'>
            {listProps?.dataSource?.map(product => {
                return <Card
                    key={product.id}
                    style={{
                        width: 300, margin: 10, color: "rgb(255, 255, 255)",
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[<CreateButton icon={false} disabled={product.count === 0 || !hasEnoughPoints(product.price)}>В корзину</CreateButton>]}
                >
                    <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title={product.title}
                        description={`Цена: ${product.price}`}
                    />
                </Card>
            })}
        </Flex>
    </List>;

};

