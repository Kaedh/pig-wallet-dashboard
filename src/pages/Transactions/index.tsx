import React from 'react';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './style';

const Transactions :React.FC = () => {
    const months = [
        {value: 3, label: 'Março'},
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 4, label: 'Abril'},
    
    ];

    const years = [
        {value: 2021, label: 2021},
        {value: 2019, label: 2019},
        {value: 2020, label: 2020},
    ];

    
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent"> Recorrentes </button>
                <button type="button" className="tag-filter tag-filter-eventual"> Eventuais </button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
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