import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, Content, Filters } from './style';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: number,
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;

}

const Transactions :React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);

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

    const transactionsByCategories = useMemo(() => {
        return type === 'entradas' ? gains : expenses;
    }, [type]);

    useEffect(() => {
        const response = transactionsByCategories.map(item => {
            return {
                id: Math.random() * data.length, 
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        })

        setData(response); 
    }, []);

        
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
                {   
                    data.map( item => (
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }

            </Content>
        </Container>
    )
};

export default Transactions;