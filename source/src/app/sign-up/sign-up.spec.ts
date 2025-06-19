import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp } from './sign-up';

describe('SignUp', () => {
  let component: SignUp;
  let fixture: ComponentFixture<SignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Layout', () => {
    it('has sign up header', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const h1 = signUp.querySelector('h1');
      expect(h1?.textContent).toBe('Sign Up');
    })

    it('has username input', () =>{
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector('input[placeholder="UserName"]');
      expect(input).toBeTruthy();
    })

    it('has email input', () =>{
      const signUp = fixture.nativeElement as HTMLElement;
      const inputs = signUp.querySelectorAll('input[placeholder="Email"]');
      expect(inputs.length).toBeTruthy();
    })
  })
});
