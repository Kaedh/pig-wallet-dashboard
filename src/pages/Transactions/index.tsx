import React from 'react';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './style';

const Transactions :React.FC = () => {
    const options = [{
        value: 'Leonardo',
        label: 'Leonardo'
    }];
    
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <HistoryFinanceCard 
                    cardColor={'#313862'}
                    tagColor={'#E44C4E'}
                    title={'Conta de Luz'}
                    subtitle={'17/03/2021'}
                    amount={'R$ 125,00'}
                />
            </Content>
        </Container>
    )
};

export default Transactions;