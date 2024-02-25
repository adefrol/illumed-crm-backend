import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseFunnelService } from './purchase-funnel.service';

describe('PurchaseFunnelService', () => {
  let service: PurchaseFunnelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseFunnelService],
    }).compile();

    service = module.get<PurchaseFunnelService>(PurchaseFunnelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
