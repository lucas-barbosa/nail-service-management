import { IServicesPackRepository } from '@domain/interfaces/IServicesPackRepository';

import { ListServicesPacksUseCase } from './ListServicesPacksUseCase';

describe('List Services Packs usecase', () => {
  const repository: IServicesPackRepository = {
    create: null,
    destroy: null,
    findAll: jest.fn(() => Promise.resolve([])),
    findByMonth: jest.fn(() => Promise.resolve([])),
    findById: null,
    update: null,
  };

  const usecase = new ListServicesPacksUseCase(repository);

  it('should call repository "findByMonth" when month is passed', async () => {
    const date = new Date();

    await usecase.execute({ month: date });
    expect(repository.findByMonth).toHaveBeenCalledWith(date);
  });

  it('should call repository "findAll" when month is not passed', async () => {
    await usecase.execute({});
    expect(repository.findAll).toHaveBeenCalled();
  });
});
