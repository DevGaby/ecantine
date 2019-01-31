import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        HttpClientTestingModule
      ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should get users length > 0', () =>
    {
      const mockUsers = {
        "-LT73AzCOG7QvnehfLRw":
          {
            "email":"pratna.meng@hotmail.fr",
            "firstname":"Pratna",
            "fund":40,"lastname":"Meng",
            "password":"a"
          },
        "-LVDKDmL8P79XmSqtdvX":
          {
            "firstname":"Jean-Philippe",
            "fund":70,
            "lastname":"Bongo"
          },
        "-LW6X4FF3IbbgTsSeLWW":
          {
            "email":"gabycalixte@gmail.com",
            "firstname":"Sarah",
            "fund":"45",
            "lastname":"GABRIEL-CALIXTE"
          }
      };

      let httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
      const service: UserService = TestBed.get(UserService);
      service.getUsers().subscribe(data =>
          {
            expect(Object.keys(data).length).toBeGreaterThan(0);
          }
        );
      const mockRequest = httpTestingController.expectOne(
          'https://ecantine-41bcc.firebaseio.com/users.json'
        );

      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush(mockUsers);
      httpTestingController.verify();
    }
  );
});
