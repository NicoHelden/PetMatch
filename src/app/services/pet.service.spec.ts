import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PetService]
    });
    service = TestBed.inject(PetService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify(); // Make sure there are no outstanding requests
  });

  it('should call getPets and return the expected pets', () => {
    const mockPets = [
      {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test', popularity: 1},
      {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test', popularity: 2}
    ];

    service.getPets().subscribe(pets => {
      // @ts-ignore
      return expect(pets).toEqual(mockPets);
    });

    const req = httpController.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPets);
  });


});
