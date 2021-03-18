import React, { useMemo } from 'react';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './style';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

const Transactions :React.FC<IRouteParams> = ({ match }) => {
    const { type } = match.params;

    const title = useMemo( () => {
        return type === 'entradas' ? 'Entradas' : 'Saídas'
    },[type] )

    const lineColor = useMemo( () => {
        return type === 'entradas' ? '#F7931B' : '#E44C4E';
    },[type] )

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
            <ContentHeader title={title} lineColor={lineColor}>
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