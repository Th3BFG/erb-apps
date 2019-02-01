import { async, TestBed, getTestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatModule } from '../../mat.module';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { POSTS } from '../../models/mock-posts';

describe('BlogService', () => {
    let _service: BlogService;
    let _httpMock: HttpTestingController;
    let _injector;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule,
          HttpClientTestingModule,
        ],
        declarations: [],
        providers: [
          BlogService,
        ]
      }).compileComponents();
      _injector = getTestBed();
      _service = _injector.get(BlogService);
      _httpMock = _injector.get(HttpTestingController);
    }));

    afterEach(() => {
      _httpMock.verify();
    });

    it('should make a GET request to /posts', () => {
        _service.getAllBlogPosts().subscribe();
        const req = _httpMock.expectOne(`${_service.API_URL}/posts`);
        expect(req.request.method).toBe('GET');
        req.flush(POSTS);
    });

    it('should make a GET request to /posts with one parameter', () => {
      _service.getBlogPost(2).subscribe();
      const req = _httpMock.expectOne(`${_service.API_URL}/posts/2`);
      expect(req.request.method).toBe('GET');
      req.flush(POSTS);
    });

    it('should make a POST request to /posts with a body', () => {
      _service.insertBlogPost(POSTS[0]).subscribe();
      const req = _httpMock.expectOne(`${_service.API_URL}/posts`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toBe(POSTS[0]);
      req.flush(POSTS);
    });

    it('should make a PUT request to /posts with one parameter and a body', () => {
      _service.updateBlogPost(POSTS[0]).subscribe();
      const req = _httpMock.expectOne(`${_service.API_URL}/posts/2`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(POSTS[0]);
      req.flush(POSTS);
    });

    it('should make a DELETE request to /posts with one parameter', () => {
      _service.deleteBlogPost(2).subscribe();
      const req = _httpMock.expectOne(`${_service.API_URL}/posts/2`);
      expect(req.request.method).toBe('DELETE');
      req.flush(POSTS);
    });
});
