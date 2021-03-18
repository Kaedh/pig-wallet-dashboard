const formatCurrency = (current: Number): string => {
    return current.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
};

export default formatCurrency;