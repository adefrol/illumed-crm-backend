import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseFunnelController } from './purchase-funnel.controller';

describe('PurchaseFunnelController', () => {
  let controller: PurchaseFunnelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseFunnelController],
    }).compile();

    controller = module.get<PurchaseFunnelController>(PurchaseFunnelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
