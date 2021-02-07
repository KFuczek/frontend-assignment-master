import { Dictionary } from './dictionary';

export const ArticeleType = {
    FASHION: 'FASHION',
    SPORTS: 'SPORTS'
}

export const defoultArticle = {
    ERROR:{
        articles: [{
                category: '',
                date: new Date(),
                id: 123,
                image: '',
                preamble: Dictionary.ERROR,
                title: ''
            }
        ]
    }
}
