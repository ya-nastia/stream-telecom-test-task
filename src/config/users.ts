export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export const users: IUser[] = [
  {
    name: 'Иванов Иван Иванович',
    email: 'ivanov@ivan.ivan',
    phone: '+70000000000',
  },
  {
    name: 'Петров Петр Петрович',
    email: 'petrov@petr.petr',
    phone: '+70000000001',
  },
  {
    name: 'Сидоров Сергей Сергеевич',
    email: 'sidorov@sidor.sidor',
    phone: '+70000000002',
  },
];