package com.example.demo.qbs.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QQnaBoard is a Querydsl query type for QnaBoard
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QQnaBoard extends EntityPathBase<QnaBoard> {

    private static final long serialVersionUID = -442269114L;

    public static final QQnaBoard qnaBoard = new QQnaBoard("qnaBoard");

    public final NumberPath<Long> boardNo = createNumber("boardNo", Long.class);

    public final StringPath content = createString("content");

    public final DateTimePath<java.util.Date> regDate = createDateTime("regDate", java.util.Date.class);

    public final StringPath title = createString("title");

    public final StringPath writer = createString("writer");

    public QQnaBoard(String variable) {
        super(QnaBoard.class, forVariable(variable));
    }

    public QQnaBoard(Path<? extends QnaBoard> path) {
        super(path.getType(), path.getMetadata());
    }

    public QQnaBoard(PathMetadata metadata) {
        super(QnaBoard.class, metadata);
    }

}

