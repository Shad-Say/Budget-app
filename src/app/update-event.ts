import { budgetItem } from 'shared/model/budget-item-model';


export interface UpdateEvent{
    old:budgetItem,
    new:budgetItem
  }
